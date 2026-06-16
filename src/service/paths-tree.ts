type Tree = {
    [name: string]: Tree;
};

export function pathsToTree(paths: string[][]): Tree {
    const root: Tree = {};

    for (const path of paths) {
        let current = root;

        for (const part of path) {
            if (!current[part]) {
                current[part] = {};
            }

            current = current[part];
        }
    }

    return root;
}