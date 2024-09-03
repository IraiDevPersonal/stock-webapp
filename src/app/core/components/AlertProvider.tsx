import { AlertStore } from "../stores/AlertStore"
import Button from "./Button"
import Modal from "./Modal"

const AlertProvider = () => {
  const [{ isOpen, title, children, cancel, confirm }, isLoading] = AlertStore(
    (s) => [s.state, s.isLoading],
  )
  const [onCancel, onConfirm] = AlertStore((s) => [s.onCancel, s.onConfirm])

  return (
    <>
      <Modal hideCloseButton isOpen={isOpen} className="divide-y-0">
        <Modal.Title classNames={{ header: "p-4" }}>{title}</Modal.Title>

        <Modal.Body className="p-4 py-0">{children}</Modal.Body>

        <Modal.Footer className="pt-4">
          <Button
            variant="light"
            disabled={isLoading}
            onClick={onCancel}
            color={cancel?.color ?? "default"}
          >
            {cancel?.label ?? "Cancelar"}
          </Button>

          <Button
            isLoading={isLoading}
            onClick={onConfirm}
            color={confirm?.color ?? "danger"}
          >
            {confirm?.label ?? "Aceptar"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AlertProvider
