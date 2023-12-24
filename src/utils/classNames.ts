type ClassEntry = {
  condition: boolean;
  class: string;
};

function classNames(...classes: (string | ClassEntry)[]): string {
  const finalClasses: string[] = [];

  classes.forEach((classEntry) => {
    if (typeof classEntry === "string") {
      finalClasses.push(classEntry);
    } else if (typeof classEntry === "object" && classEntry.condition) {
      finalClasses.push(classEntry.class);
    }
  });

  return finalClasses.join(" ");
}

export default classNames;
