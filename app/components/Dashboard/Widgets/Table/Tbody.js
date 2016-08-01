import React from 'react';

class Tbody extends React.Component {
  render() {
    const { newsletter } = this.props;
    const dataList = this.props.newsletter.map((news, key) => {
      return (
                <tr key={news.id}>
                    <td className="text-center">x</td>
                    <td style={{textTransform:'capitalize'}}><strong>{news.nome}</strong></td>
                    <td>{news.email}</td>
                    <td>{news.estado}</td>
                    <td>{news.cidade}</td>
                    <td className="td-actions text-right">
                        <a href="#" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="View Profile">
                            <i className="ti-user"></i>
                        </a>
                        <a href="#" rel="tooltip" title="" className="btn btn-success btn-simple btn-xs" data-original-title="Edit Profile">
                            <i className="ti-pencil-alt"></i>
                        </a>
                        <a href="#" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                            <i className="ti-close"></i>
                        </a>
                    </td>
                </tr>
        )
    })

    return (
		<tbody>
        {dataList}
        </tbody>
    );
  }
}

export default (Tbody);