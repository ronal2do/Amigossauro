import React from 'react';

class Table extends React.Component {
  render() {
  	const { task } = this.props;
    const taskList = {};
    return (
      <table className="table">
       	<tbody>
       		<tr>
                <td>
                    <label className="checkbox">
                        <span className="icons"><span className="first-icon fa fa-square"></span><span className="second-icon fa fa-check-square "></span></span><input type="checkbox" value="" data-toggle="checkbox" />
                    </label>
                </td>
                <td>Sign contract for "What are conference organizers afraid of?"</td>
                <td className="td-actions text-right">
					<div className="table-icons">
						<button type="button" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="Edit Task">
                            <i className="ti-pencil-alt"></i>
                        </button>
                        <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                            <i className="ti-close"></i>
                        </button>
					</div>
                </td>
            </tr>
            
        </tbody>
      </table>
    );
  }
}

export default (Table);