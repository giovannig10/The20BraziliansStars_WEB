import axios from "axios";

// URL base da API
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4001";

// Cliente axios com URL base configurada
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para adicionar token em requisições autenticadas
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Função para fazer login
export const login = async (email, password) => {
  console.log("Fazendo login com:", email, password);

  try {
    const response = await apiClient.post("/auth/login", { email, password });
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Erro no login:", error);

    // Tratar diferentes tipos de erros
    if (error.response) {
      // O servidor retornou um status de erro
      return {
        success: false,
        message: error.response.data?.message || "Credenciais inválidas.",
      };
    } else if (error.request) {
      // A requisição foi feita mas não houve resposta
      return {
        success: false,
        message: "Servidor não respondeu. Verifique sua conexão.",
      };
    } else {
      // Erro na configuração da requisição
      return {
        success: false,
        message: "Erro ao tentar conectar com o servidor.",
      };
    }
  }
};

// Função para registrar novo usuário
export const register = async (userData) => {
  try {
    const response = await apiClient.post("/auth/register", userData);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Erro no registro:", error);

    if (error.response) {
      // Verificar erros comuns de registro
      if (error.response.status === 409) {
        return {
          success: false,
          message: "Este email já está em uso.",
        };
      }

      return {
        success: false,
        message: error.response.data?.message || "Erro ao cadastrar.",
      };
    } else if (error.request) {
      return {
        success: false,
        message: "Servidor não respondeu. Verifique sua conexão.",
      };
    } else {
      return {
        success: false,
        message: "Erro ao tentar conectar com o servidor.",
      };
    }
  }
};

// Função para verificar autenticação atual
export const checkAuth = async () => {
  try {
    const response = await apiClient.get("/auth/me");
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return { success: false };
  }
};

// Função para fazer logout (limpa tokens no client-side)
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  // Limpar o cookie (útil para integração com middleware)
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  return { success: true };
};

// Exportar o cliente axios configurado
export default apiClient;