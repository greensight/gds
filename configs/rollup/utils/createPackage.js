const content = `{
    "module": "%path%"
}
`;

const createPackageJson = (path) => content.replace('%path%', path);

export default createPackageJson;
