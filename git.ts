const completionSpec: Fig.Spec = {
  name: "git",
  additionalSuggestions: [
    {
      name: "commit -m 'msg'",
      insertValue: "commit -m '{cursor}'",
      description: "Git commit shortcut",
    },
    {
      name: "undo most recent commit",
      description: "Git commit shortcut",
      insertValue: "reset --soft HEAD~1",
      type: "shortcut",
    },
    {
      name: "update most recent commit",
      description: "Git commit shortcut",
      insertValue: "commit --amend",
      type: "shortcut",
    },
    {
      name: "log (pretty print)",
      insertValue:
        "log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all",
      description: "Pretty print git log",
    },
  ],
  subcommands: [
    {
      name: "commit",
      options: [
        {
          name: "-m",
          args: {
            suggestions: [
              {
                name: "feat: ",
                insertValue: "'feat: {cursor}'",
              },
              {
                name: "fix: ",
                insertValue: "'fix: {cursor}'",
              },
              {
                name: "docs: ",
                insertValue: "'docs: {cursor}'",
              },
              {
                name: "chore: ",
                insertValue: "'chore: {cursor}'",
              },
            ],
          },
        },
      ],
    },
  ],
};

export default completionSpec;
