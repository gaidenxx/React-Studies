import { useFormStatus } from 'react-dom'; // Cannot be use in same file with formActions / useActionState

export default function Submit() {
    const { pending, data, method, action } = useFormStatus(); // Values from this hook

    return (
    <p className="actions">
        <button type="submit" disabled={pending}>
            {pending ? 'Submitting...' : 'Submit'}
        </button>
    </p>
    )
}