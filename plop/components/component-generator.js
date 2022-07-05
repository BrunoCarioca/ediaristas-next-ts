module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Component',
    prompts: [
      {
        name: 'name',
        type: 'input',
        message: 'Nome do Component: ',
      },
      {
        name: 'type',
        type: 'list',
        message: 'Tipo do Component: ',
        choices: [
          {
            name: 'Data Display',
            value: 'data-display',
          },
          {
            name: 'Feedback',
            value: 'feedback',
          },
          {
            name: 'Inputs',
            value: 'inputs',
          },
          {
            name: 'Navigation',
            value: 'navigation',
          },
          {
            name: 'Surfaces',
            value: 'surfaces',
          },
        ],
      },
    ],
    actions(data) {
      const basePath = `src/ui/components/${data.type}/${data.name}/`;
      const actions = [
        {
          type: 'add',
          path: `${basePath}/${data.name}.tsx`,
          templateFile: 'plop/components/component-template.hbs',
        },
        {
          type: 'add',
          path: `${basePath}/${data.name}.style.tsx`,
          templateFile: 'plop/components/component-style-template.hbs',
        },
        {
          type: 'add',
          path: `${basePath}/${data.name}.stories.tsx`,
          templateFile: 'plop/components/component-story-template.hbs',
        },
        {
          type: 'add',
          path: `${basePath}/${data.name}.test.tsx`,
          templateFile: 'plop/components/component-test-template.hbs',
        },
      ];

      return actions;
    },
  });
};
