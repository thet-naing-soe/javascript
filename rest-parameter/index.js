const setPermissionLevel = (permissionLevel, ...names) =>
  names.forEach((name) =>
    console.log(`${name} now has ${permissionLevel} level access.`)
  );

setPermissionLevel("admin", "Dave", "Sally", "Mike");
