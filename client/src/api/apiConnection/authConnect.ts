import { toast } from "react-toastify";
import baseURL from "../api";

interface RegisterResponse {
    message?: any;
    status: string;
  }

  interface LoginResponse {
    message?: any;
    status: string;
    user: object;
    token: string;
  }

  interface RegisterFormValues {
    name: string;
    userName: string;
    number: string;
    email: string;
    password: string;
  }

  interface LoginFormValues {
    userName: string;
    password: string;
  }
export const register = async (values: RegisterFormValues): Promise<string> => {
  try {
    const response = await baseURL.post<RegisterResponse>('/api/auth/register', values);
    console.log(response.data);

    if (response.data.status === 'success') {
      console.log('success');
      toast.success('Registration successful');
      return 'success';
    } else {
      console.log('failed');
      console.log(response.data.message);
      toast.error('Registration failed');
      return 'failed';
    }
  } catch (error) {
    console.log('catch');

    const errorMessage = (error as any)?.response?.data?.message || 'An error occurred during registration';
    console.log(errorMessage);

    toast.error(errorMessage);
    throw new Error(errorMessage); // Throw the error to be caught by the caller
  }
};

export const login = async (values:LoginFormValues) => {
    console.log('logg');
   
    try {
      const response = await baseURL.post<LoginResponse>('/api/auth/login', values);
      console.log(response.data);
  
      // Handle the success response
      if (response.data.status === 'success') {
        console.log('success');
        toast.success('Login successful');
        return response;
  
      } else {
        console.log('failed');
        console.log(response.data.message);
        toast.error('Login failed');
        return 'failed'
      }
    } catch (error) {
      console.log('catch');
  
      // Extract the error message if available
      const errorMessage = (error as any)?.response?.data?.message || 'An error occurred during Login';
      console.log(errorMessage);
      toast.error(errorMessage);
    }
    
  }
