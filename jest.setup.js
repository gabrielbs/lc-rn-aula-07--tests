import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

// configs js
console.log("teste");
jest.clearAllMocks();
//

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

jest.mock("@react-navigation/native");
