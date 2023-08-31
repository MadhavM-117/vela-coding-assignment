import { getUsers } from "./index";

it("should have the appropriate fields for user pagination", () => {
  expect.hasAssertions();

  return getUsers(1).then((r) => {
    expect(r).toHaveProperty("status");
    expect(r).toHaveProperty("data");
    expect(r.data).toHaveProperty("page");
    expect(r.data).toHaveProperty("per_page");
    expect(r.data).toHaveProperty("total");
    expect(r.data).toHaveProperty("total_pages");
    expect(r.data).toHaveProperty("data");
    expect(r.data).toHaveProperty("support");

    if (r.data.data.length > 0) {
      r.data.data.forEach((user) => {
        expect(user).toHaveProperty("id");
        expect(user).toHaveProperty("email");
        expect(user).toHaveProperty("first_name");
        expect(user).toHaveProperty("last_name");
        expect(user).toHaveProperty("avatar");
      });
    }

    const usersOnPage = Math.min(
      r.data.total - r.data.per_page * (r.data.page - 1),
      r.data.per_page,
    );

    expect(r.data.data.length).toBe(usersOnPage);

    expect(r.data.page).toBeLessThanOrEqual(r.data.total_pages);

    expect(r.data.support).toHaveProperty("url");
    expect(r.data.support).toHaveProperty("text");
  });
});
