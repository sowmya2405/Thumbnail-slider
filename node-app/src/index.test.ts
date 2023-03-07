import request from "supertest";
import app from "./index";

describe("APIs", () => {
  describe("GET /templates", () => {
    it("should return an array of templates", async () => {
      const res = await request(app).get("/templates");
      expect(res.status).toBe(200);
      expect(res.body).toBeInstanceOf(Array);
      expect(res.body[0]).toHaveProperty("title");
      expect(res.body[0]).toHaveProperty("id");
      expect(res.body[0]).toHaveProperty("cost");
      expect(res.body[0]).toHaveProperty("description");
      expect(res.body[0]).toHaveProperty("thumbnail");
      expect(res.body[0]).toHaveProperty("image");
    });
  });

  describe("GET /images/:imageName", () => {
    it("should return the requested image", async () => {
      const imageName = "/large/7111-b.jpg";
      const res = await request(app).get(`/images/${imageName}`);
      expect(res.status).toBe(200);
      expect(res.headers["content-type"]).toEqual("image/jpeg");
      expect(res.body).toBeInstanceOf(Buffer);
    });

    it("should return a 404 status code for non-existent images", async () => {
      const imageName = "non-existent-image.jpg";
      const res = await request(app).get(`/images/${imageName}`);
      expect(res.status).toBe(404);
    });
  });
});
