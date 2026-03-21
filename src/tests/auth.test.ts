import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";


const IncomingHttpHeaders1 = {
  authorization: "ApiKey 1202458Ftge",
};

const IncomingHttpHeaders2 = {
  authorization: "",  
};

const IncomingHttpHeaders3 = {
  authorization: "Bearer 120250589",
};

describe("ApiKey correctly formatted", () => {
  test("ApiKey is correct", () => {
    const result = getAPIKey(IncomingHttpHeaders1)
    expect(result).toBe("120250589");
  });

  test("Empty header", () => {
    const result = getAPIKey(IncomingHttpHeaders2)
    expect(result).toBe(null);
  });

  test("Header not started with ApiKey ", () => {
    const result = getAPIKey(IncomingHttpHeaders3)
    expect(result).toBe(null);
  });
});
