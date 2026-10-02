export default {
  fields: {
    add: {
      employeeId: {
        type: 'string',
        label: 'Employee ID',
        required: true
      },
      firstName: {
        type: 'string',
        label: 'First Name',
        required: true
      },
      lastName: {
        type: 'string',
        label: 'Last Name',
        required: true
      },
      bio: {
        type: 'string',
        label: 'Biography',
        textarea: true
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: ['firstName', 'lastName', 'employeeId', 'bio']
      }
    }
  }
};