import { formatDistanceToNow } from 'date-fns'

export function formatData(data){
 return formatDistanceToNow(new Date(data), { addSuffix: true });
}