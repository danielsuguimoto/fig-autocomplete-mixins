const completionSpec: Fig.Spec = {
  name: "kool",
  subcommands: [
    {
      name: "run",
      subcommands: [
        {
          name: "artisan",
          args: {
            name: "command",
            generators: {
              script: "kool run artisan list --format=json",
              cache: {
                strategy: "stale-while-revalidate",
                ttl: 1000 * 60 * 60,
              },
              postProcess: function (out) {
                return JSON.parse(out).commands.map((command) => ({
                  name: command.name,
                  description: command.description,
                  args: Object.keys(command.definition.arguments).map(
                    (argumentKey) => {
                      const argument =
                        command.definition.arguments[argumentKey];

                      return {
                        name: argument.name,
                        description: argument.description,
                        isOptional: !argument.is_required,
                      };
                    }
                  ),
                  options: Object.keys(command.definition.options).map(
                    (optionKey) => {
                      const option = command.definition.options[optionKey];
                      const names = [option.name];

                      if (option.shortcut !== "") {
                        names.push(option.shortcut);
                      }

                      return {
                        name: names,
                        description: option.description,
                      };
                    }
                  ),
                }));
              },
            },
          },
        },
        {
          name: "node",
          loadSpec: "node",
        },
        {
          name: "yarn",
          loadSpec: "yarn",
        },
        {
          name: "npm",
          loadSpec: "yarn",
        },
        {
          name: "composer",
          loadSpec: "composer",
        },
        {
          name: "mysql",
          loadSpec: "mysql",
        },
        {
          name: "php",
          loadSpec: "php",
        },
      ],
    },
  ],
};
export default completionSpec;
