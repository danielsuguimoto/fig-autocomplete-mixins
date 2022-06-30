const completionSpec: Fig.Spec = {
  name: "ssh",
  additionalSuggestions: [
    {
      name: "exlink-prod",
      insertValue: "forge@exlink-prod",
      description: "Connect to exlink-prod server",
      type: "shortcut"
    },
    {
      name: "exlink-prod-task",
      insertValue: "forge@exlink-prod-task",
      description: "Connect to exlink-prod-task server",
      type: "shortcut"
    },
    {
      name: "exlink-dev",
      insertValue: "forge@exlink-dev",
      description: "Connect to exlink-dev server",
      type: "shortcut"
    },
  ]
};
export default completionSpec;