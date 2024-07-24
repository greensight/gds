const getContent = ({ path, types }) => `{
    "module": "${path}",
    "types": "${types}"
}
`;

const createPackageJson = (path, types) => getContent({ path, types });

export default createPackageJson;
