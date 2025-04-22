/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {

  if (list1 === null && list2 === null) return null

  let newList = new ListNode();
  let head = newList;

  let it1: ListNode | null = list1;
  let it2: ListNode | null = list2;

  while (it1 !== null || it2 !== null) {

    let val1 = null;
    let val2 = null;

    if (it1 !== null) {
      val1 = it1.val;
    }

    if (it2 !== null) {
      val2 = it2.val;
    }

    if (val1 !== null && val2 !== null) {
      if (val1 > val2) {
        newList.val = val2;
        if (it2) {
            it2 = it2.next
        } else {
            it2 = null
        }
      } else {
        newList.val = val1;
        if (it1) {
            it1 = it1.next
        } else {
            it1 = null
        }
      }
    } else if (val1 !== null || val2 !== null) {
      if (val1 !== null) {
        newList.val = val1;

        if (it1) {
            it1 = it1.next
        } else {
            it1 = null
        }

      } else if (val2 !== null) {
        newList.val = val2;

        if (it2) {
            it2 = it2.next
        } else {
            it2 = null
        }
      }
    }

    if (it1 || it2) {
      newList.next = new ListNode();
      newList = newList.next;
    }

  }

  return head;
}

export function printList(list: ListNode | null) {
  let l1: ListNode | null = list
  let arr  = [];
  while(l1 !== null) {
    arr.push(l1.val)
    l1 = l1.next
  }
  console.log(arr)
}