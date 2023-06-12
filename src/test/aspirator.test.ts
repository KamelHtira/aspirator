import { Aspirator } from "../aspirator";

describe("Aspirator", () => {
  let aspirator: Aspirator;

  // Exemple identique à celui du test technique

  beforeEach(() => {
    // État initial
    const X = 5; // Position initiale X
    const Y = 5; // Position initiale Y
    const orientation = "N"; // Orientation initiale (N, W, E, S)
    const limiteX = 10; // Dimension de la grille en X
    const limiteY = 10; // Dimension de la grille en Y

    aspirator = new Aspirator(X, Y, orientation, { x: limiteX, y: limiteY });
  });

  it("should follow instructions", () => {
    // Les instructions
    aspirator.followInstructions("DADADADAA");

    // Vérification des résultats
    expect(aspirator.x).toBe(5);
    expect(aspirator.y).toBe(6);
    expect(aspirator.orientation).toBe("N");
    
  });
});
