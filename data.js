const ROLE = {
  ADMIN: "admin",
  BASIC: "basic",
};

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "Lahiru", role: ROLE.ADMIN },
    { id: 2, name: "Madu", role: ROLE.BASIC },
    { id: 3, name: "Kamal", role: ROLE.BASIC },
  ],
  projects: [
    { id: 1, name: "Lahiru project", userId: 1 },
    { id: 2, name: "Madu project", userId: 2 },
    { id: 3, name: "Kamal project", userId: 3 },
  ],
};
