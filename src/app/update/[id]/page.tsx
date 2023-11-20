type UpdateProps = {
    params: {
        id: string;
    };
};
export default function Update(props:UpdateProps) {
    return <div>Update {props.params.id}</div>;
}