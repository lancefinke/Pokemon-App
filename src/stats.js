export function Stats({hp, attack, defense, specialAttack, specialDefense, speed}){

    return (
        <table>
            <tbody>
            <tr>
                <td>HP</td>
                <td>{hp}</td>
            </tr>
            <tr>
                <td>Attack</td>
                <td>{attack}</td>
            </tr>
            <tr>
                <td>Defense</td>
                <td>{defense}</td>
            </tr>
            <tr>
                <td>Special Attack</td>
                <td>{specialAttack}</td>
            </tr>
            <tr>
                <td>Special Defense</td>
                <td>{specialDefense}</td>
            </tr>
            <tr>
                <td>Speed</td>
                <td>{speed}</td>
            </tr>
            </tbody>
        </table>
    );
}