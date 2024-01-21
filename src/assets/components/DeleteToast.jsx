import { Toast } from "react-bootstrap"


export default function DeleteToast(props){
    const {setShow, show} = props
    return (
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Deleted!</strong>
          </Toast.Header>
        </Toast>
    )
}