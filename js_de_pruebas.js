let usuarios = [
    {
      nombre: "Enzo",
      apellido: "Perez",
      correo: "enzope@gmail.com",
      telefono: 1234567,
      nacionalidad: "argentino",
    },
    {
      nombre: "Sergio",
      apellido: "Ramos",
      correo: "sramos@gmail.com",
      telefono: 7654321,
      nacionalidad: "español",
    },
    {
      nombre: "Martin",
      apellido: "Demichellis",
      correo: "Mishu@gmail.com",
      telefono: 2468101,
      nacionalidad: "argentino",
    },
    {
      nombre: "Mateo",
      apellido: "Retegui",
      correo: "argentano@gmail.com",
      telefono: 9632587,
      nacionalidad: "italiano",
    },
    {
      nombre: "Karim",
      apellido: "Benzema",
      correo: "gatoblanco@gmail.com",
      telefono: 8524679,
      nacionalidad: "frances",
    },
  ];
  
  usuarios.forEach((e, i) => {
    console.log(JSON.stringify(e));
    console.log(usuarios[i]);
  });

