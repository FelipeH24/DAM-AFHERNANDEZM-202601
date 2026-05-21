import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@navegation_user";

export interface UserRecord {
  username: string;
  password: string;
  email: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export const saveUser = async (user: UserRecord) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return true;
  } catch (error) {
    console.error("saveUser error", error);
    return false;
  }
};

export const getUser = async (): Promise<UserRecord | null> => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    if (!value) return null;
    return JSON.parse(value) as UserRecord;
  } catch (error) {
    console.error("getUser error", error);
    return null;
  }
};

export const loginUser = async ({ username, password }: LoginCredentials) => {
  const user = await getUser();
  if (!user) return false;
  return user.username === username && user.password === password;
};
