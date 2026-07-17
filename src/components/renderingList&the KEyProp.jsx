const member = [
    { id: 1, name:"sakshi", age:29 },
    { id: 2, name:"Tanvi", age:29 },
    { id: 9, name:"honey", age:29 }
]

function TeamList() {
    return (
        <div>
            <ol>
                {member.map((member) => (
                    <li
                        key={member.id} > {member.name},{member.age}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TeamList;
