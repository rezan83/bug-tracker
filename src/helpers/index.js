export const getPeriorityName = bugPriority => {
  return ['low', 'normal', 'critical'][bugPriority - 1];
};
