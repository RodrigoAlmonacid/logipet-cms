export default {
  options: {
    subforms: {
      title: {
        fields: ['title'],
        protection: true,
        reload: true
      },
      changePassword: {
        fields: ['password']
      },
      nombre: {
        label: 'Nombre',
        fields: ['firstName']
      },
      apellido: {
        label: 'Apellido',
        fields: ['lastName']
      },
      bio: {
        label: 'Biografía',
        fields: ['bio']
      },
    },

    groups: {
      account: {
        label: 'Account',
        subforms: ['title', 'changePassword', 'nombre', 'apellido', 'bio']
      }
    }
  }
};