/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "./types";

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let it = head
    let newList = []

    let i = 1;
    while (it !== null) {
        if (it!==null) newList.push(it.val)
        i++
        it = it.next
    }

    let filteredList = []
    let lastEl = newList.length - n
    for (let i = 0; i < newList.length;i++) {
        if (i!==lastEl) {
            filteredList.push(newList[i])
        }
    }

    if (filteredList.length === 0) return null

    let newSingly = new ListNode()
    let newHead = newSingly
    for (let i = 0; i < filteredList.length;i++) {
        newSingly.val = filteredList[i]

        if (i + 1< filteredList.length) {
            newSingly.next = new ListNode()
            newSingly = newSingly.next
        }


    }

    return newHead
};