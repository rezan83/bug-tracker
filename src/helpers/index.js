// priority is stored as number, we need it as name
export const getPriorityName = bugPriority => {
  return ['low', 'normal', 'critical'][bugPriority - 1];
};
