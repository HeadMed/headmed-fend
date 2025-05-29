import { Textarea } from '@/components/ui/textarea';
import React from 'react'

interface RecordItemProps{
    title:string
    field?:string
}

export const RecordItem = ({title, field}: RecordItemProps) => {
  return (
    <div>
      <label className="text-sm font-medium capitalize">
        {title}
      </label>
      <Textarea
        value={field}
        readOnly
        className="mt-1"
        rows={3}
      />
    </div>
  );
}



