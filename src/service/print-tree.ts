type Tree = {
    [name: string]: Tree;
};

export function printTree(tree: Tree, indent = "") {
    const entries = Object.entries(tree);

    entries.forEach(([name, child], index) => {
        const isLast = index === entries.length - 1;

        const branch = isLast ? "└─ " : "├─ ";
        console.log(indent + branch + name);

        const nextIndent = indent + (isLast ? "    " : "│   ");

        printTree(child, nextIndent);
    });
}