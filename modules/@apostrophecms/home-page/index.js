export default {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/layout': {},
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            '@apostrophecms/video': {},
            '@apostrophecms/clientes': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'main'
        ]
      }
    }
  },
  handlers(self) {
    return {
      '@apostrophecms/page:beforeSend': {
        async agregarEmpleados(req) {
          if (req.data.page?.type !== self.name) {
            return;
          }

          req.data.empleados = await self.apos.user
            .find(req)
            .permission(false)
            .project({
              title: 1,
              employeeId: 1,
              role: 1,
              firstName: 1,
              lastName: 1,
              bio: 1
            })
            .toArray();
        }
      }
    };
  }
};
