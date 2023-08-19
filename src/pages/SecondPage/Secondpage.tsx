import Component1 from "../../Components/SecondPageComponents/Component1/Component1"
import CheckboxLabels from "../../Components/SecondPageComponents/Component2/CheckboxLabels"

const SecondPage = () => {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Component 1</h2>
            <Component1 />
            <h2 style={{ textAlign: 'center' }}>Component 2</h2>
            <CheckboxLabels />
        </div>
    )
}

export default SecondPage