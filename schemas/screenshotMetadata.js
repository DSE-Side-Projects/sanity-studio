export default {
  name: 'metadata',
  title: 'Screenshot Metadata',
  type: 'object',
  fieldsets: [
    {name: 'metadata', title: 'Screenshot metadata'}
  ],
  fields: [
    {
      title: 'Timestamp',
      name: 'timestamp',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      },
      fieldset: 'metadata'
    },
    {
      title: 'Source',
      name: 'source',
      type: 'string',
      options: {
        list: [
          {title: 'User', value: 'user'},
          {title: 'Serverless function', value: 'function'}
        ],
      layout: 'radio'
      },
      fieldset: 'metadata'
    }
  ],
}
