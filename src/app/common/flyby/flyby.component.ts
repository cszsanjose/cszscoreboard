import { Component, ElementRef, inject, input, viewChild } from '@angular/core';

@Component({
    selector: 'app-flyby',
    templateUrl: './flyby.component.html',
    styleUrls: ['./flyby.component.scss'],
    host: {
        class: 'fullscreen',
        style: 'z-index: 10000'
    }
})
export class FlybyComponent {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  private readonly animationDuration = 2000

  readonly direction = input<'left' | 'right'>('left');

  private readonly content = viewChild<ElementRef<HTMLDivElement>>('content');

  fly(): void {
    const content = this.content()!.nativeElement
    const contentRect = content.getBoundingClientRect()
    const parent = this.el.nativeElement
    const parentRect = parent.getBoundingClientRect()
    const keyframes: Keyframe[] = []

    if (this.direction() === 'left') {
      keyframes.push(
        {
          visibility: 'visible',
          left: `${parentRect.width}px`,
          easing: 'ease-out'
        },
        {
          visibility: 'visible',
          opacity: '100%',
          left: `${(parentRect.width - contentRect.width) / 2}px`
        },
        {
          visibility: 'hidden',
          left: `-${contentRect.width}px`,
          opacity: '0%',
          easing: 'ease-in'
        }
      )
    } else {
      keyframes.push(
        {
          visibility: 'visible',
          left: `-${contentRect.width}px`,
          easing: 'ease-out'
        },
        {
          visibility: 'visible',
          opacity: '100%',
          left: `${(parentRect.width - contentRect.width) / 2}px`
        },
        {
          visibility: 'hidden',
          left: `${parentRect.width}px`,
          opacity: '0%',
          easing: 'ease-in'
        }
      )
    }

    content.style.top = `${(parentRect.height - contentRect.height) / 2}px`
    content.animate(keyframes, this.animationDuration)
  }
}
