/**
 * @typedef {Object} MyComponentProps
 * @property {string} p1 a simple prop
 * @property {number} p2 a simple prop
 * @property {string} [optional] an optional prop
 */

/**
 * @param {MyComponentProps} props
 * @return {JSX.Element}
 */
const MyComponent = ({p1, p2, optional}) => {
    return <div>Hello with props: {p1}-{p2}. Optional: {optional}</div>
};

export default MyComponent;