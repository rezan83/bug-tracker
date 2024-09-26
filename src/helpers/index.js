export const getPriorityName = bugPriority => {
  return ['low', 'normal', 'critical'][bugPriority - 1];
};
