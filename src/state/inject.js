import tree from './tree';

const inject = (branch, context) => {
    const currentBranch = tree.select(branch);

    context[branch] = currentBranch;
    currentBranch.on('update', () => {
        context[branch] = currentBranch;
    });

    return () => currentBranch.off(branch);
};

export default inject;
