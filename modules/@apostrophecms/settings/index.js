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
      basics: {
        label: 'Mi perfil',
        fields: ['firstName', 'lastName', 'bio']
      }
    },

    groups: {
      account: {
        label: 'Account',
        subforms: ['title', 'changePassword', 'basics']
      }
    }
  }
};