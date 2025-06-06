import { Collider } from './Collider';

/**
 * A circle used to detect collisions
 * @class
 */
export class CircleCollider extends Collider {
    radius: number;
    scale: number;

    /**
     * @constructor
     * @param {Number} [x = 0] The starting X coordinate
     * @param {Number} [y = 0] The starting Y coordinate
     * @param {Number} [radius = 0] The radius
     * @param {Number} [scale = 1] The scale
     * @param {Number} [padding = 5] The amount to pad the bounding volume when testing for potential collisions
     */
    constructor(x = 0, y = 0, radius = 0, scale = 1, padding = 5) {
        super(x, y, padding);

        this.radius = radius;
        this.scale = scale;
    }

    /**
     * Draws the circle to a CanvasRenderingContext2D's current path
     * @param {CanvasRenderingContext2D} context The context to add the arc to
     */
    draw(context) {
        const x = this.x;
        const y = this.y;
        const radius = this.radius * this.scale;

        context.moveTo(x + radius, y);
        context.arc(x, y, radius, 0, Math.PI * 2);
    }
}
