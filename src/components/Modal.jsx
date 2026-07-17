function Modal({header, body, footer}) {
    return (
        <div className="modal">
            <div className="modal-header">
                {header}
            </div>
            <div className="modal-body">
                {body}
            </div>
            <div className="modal-footer">
                {footer}
            </div>
        </div>
    );
}
export default Modal;