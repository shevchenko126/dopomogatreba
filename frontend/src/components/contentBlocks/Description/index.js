import './index.css'
import 'bootstrap/dist/css/bootstrap.css';


const Description = ({ props }) => {
    props.map((block) => {
        console.log(block)
    })
    return (
        <>
            {props.map(({ header, content }, key) => {
                { console.log(typeof (content), content instanceof Array) }

                return (
                    <>
                        <h3>{header}</h3>
                        {(content instanceof Array) ?
                        <ul>
                            {content.map((item, key) => {
                                return (<li key={key}>{item}</li>)
                            })}
                        </ul>
                        :
                        <p>{content}</p>}
                    </>
                )
            })}
        </>
    )

}

export default Description