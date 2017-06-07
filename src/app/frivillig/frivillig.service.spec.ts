import { FrivilligService } from "./frivillig.service";
import { TestBed, async, inject } from "@angular/core/testing";

describe("FrivilligService", () => { //name of test suite
    let service: FrivilligService;

    beforeEach(async(() => { //instantiate service before each test, async test zone
        TestBed.configureTestingModule({
            providers: [FrivilligService]
        })
    }));
    it("Test antallet af frivillige i array", async(
        inject([FrivilligService], (service: FrivilligService) => {
            service.getAlleMockFrivillige().then(response => {
                expect(response.length).toBe(5);
            })
        })
    ))
});