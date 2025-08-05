// components/PortfolioTable.jsx
import { Table, Button, Badge } from "react-bootstrap";

export default function PortfolioTable({ entries, onRemove }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Notes</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {entries.length === 0 ? (
          <tr>
            <td colSpan={5} className="text-center text-muted">
              No portfolio entries yet.
            </td>
          </tr>
        ) : (
          entries.map((e) => (
            <tr key={e.id}>
              <td>
                <Badge bg={e.type === "Revenue" ? "success" : "danger"}>
                  {e.type}
                </Badge>
              </td>
              <td>${Number(e.amount).toLocaleString()}</td>
              <td>{e.notes}</td>
              <td>{e.date}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onRemove(e.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}
