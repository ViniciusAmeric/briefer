import { type SchemaItem } from '@/hooks/useSchemaList'
import SchemaSchemaItem from './SchemaSchemaItem'
import TableSchemaItem from './TableSchemaItem'
import ColumnSchemaItem from './ColumnSchemaItem'

interface Props {
  schemaItem: SchemaItem
  onToggleSchema: (schema: string) => void
  onToggleTable: (schema: string, table: string) => void
}

function SchemaItem(props: Props) {
  switch (props.schemaItem._tag) {
    case 'schema':
      return (
        <SchemaSchemaItem
          name={props.schemaItem.name}
          schema={props.schemaItem.schema}
          isOpen={props.schemaItem.isOpen}
          onToggle={props.onToggleSchema}
        />
      )
    case 'table':
      return (
        <TableSchemaItem
          schemaName={props.schemaItem.schemaName}
          name={props.schemaItem.name}
          table={props.schemaItem.table}
          isOpen={props.schemaItem.isOpen}
          onToggle={props.onToggleTable}
        />
      )
    case 'column':
      return (
        <ColumnSchemaItem
          schemaName={props.schemaItem.schemaName}
          tableName={props.schemaItem.tableName}
          column={props.schemaItem.column}
        />
      )
  }
}

export default SchemaItem