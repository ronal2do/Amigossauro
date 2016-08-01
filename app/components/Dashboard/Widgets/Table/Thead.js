import React from 'react';

class Thead extends React.Component {
  render() {
    return (
		<thead>
            <tr>
                <th className="text-center">#</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Estado</th>
                <th>Cidade</th>
                <th className="text-right">#</th>
            </tr>
        </thead>
    );
  }
}

export default (Thead);