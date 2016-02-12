import tree from './tree';

const bind = (branch, context) => {
    const currentBranch = tree.select(branch);

    context[branch] = currentBranch.get();
    currentBranch.on('update', () => {
        context[branch] = currentBranch.get();
        console.log('state',branch, 'rebinded');
    });

    return () => currentBranch.off(branch);
};

export default bind;
